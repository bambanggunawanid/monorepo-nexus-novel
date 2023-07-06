resource "google_project_iam_custom_role" "eks" {
  role_id     = "${var.env}-${var.eks_name}-eks-cluster"
  title       = "${var.env}-${var.eks_name}-eks-cluster"
  description = "Custom role for EKS cluster on GKE"

  permissions = [
    "container.clusters.create",
    "container.clusters.delete",
    "container.clusters.get",
    "container.clusters.update",
    "container.clusters.list",
    "container.clusters.getIamPolicy",
    "container.clusters.setIamPolicy",
  ]
}

resource "google_project_iam_member" "eks" {
  role = google_project_iam_custom_role.eks.name
  member = "serviceAccount:service-${var.env}-${var.eks_name}@container-engine-robot.iam.gserviceaccount.com"
}

resource "google_container_cluster" "this" {
  name            = "${var.env}-${var.eks_name}"
  location        = var.gke_location
  initial_node_count = var.gke_initial_node_count

  master_auth {
    username = ""
    password = ""
  }

  depends_on = [google_project_iam_member.eks]
}
