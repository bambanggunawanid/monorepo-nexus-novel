variable "env" {
  description = "Environment name."
  type        = string
}

variable "gke_version" {
  description = "Desired Kubernetes version."
  type        = string
}

variable "gke_cluster_name" {
  description = "Name of the cluster."
  type        = string
}

variable "subnet_ids" {
  description = "List of subnet IDs. Must be in at least two different availability zones."
  type        = list(string)
}

variable "node_iam_policies" {
  description = "List of IAM Policies to attach to GKE nodes."
  type        = map(any)
  default = {
    1 = "projects/my-project-name/roles/gke.worker"
    2 = "projects/my-project-name/roles/gke.networkViewer"
    3 = "projects/my-project-name/roles/gcr.readOnly"
    4 = "projects/my-project-name/roles/logging.logWriter"
  }
}

variable "node_pools" {
  description = "GKE node pools"
  type        = map(any)
}

variable "enable_workload_identity" {
  description = "Determines whether to enable Workload Identity for GKE"
  type        = bool
  default     = true
}
