resource "google_project_iam_custom_role" "nodes" {
  role_id     = "${var.env}-${var.eks_name}-eks-nodes"
  title       = "${var.env}-${var.eks_name}-eks-nodes"
  description = "Custom role for EKS worker nodes on GKE"

  permissions = [
    "container.nodes.create",
    "container.nodes.delete",
    "container.nodes.get",
    "container.nodes.update",
    "container.nodes.list",
    "container.nodes.getIamPolicy",
    "container.nodes.setIamPolicy",
  ]
}

resource "google_project_iam_member" "nodes" {
  role   = google_project_iam_custom_role.nodes.name
  member = "serviceAccount:service-${var.env}-${var.eks_name}@container-engine-robot.iam.gserviceaccount.com"
}
