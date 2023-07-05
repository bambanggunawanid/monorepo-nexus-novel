provider "google" {
  credentials = file(var.gcp_auth_file)
  project     = var.gcp_project
  region      = var.gcp_region
}

# Create a GCS Bucket
resource "google_storage_bucket" "tf-bucket" {
  project       = var.gcp_project
  name          = var.bucket-name
  location      = var.gcp_region
  force_destroy = true
  storage_class = var.storage-class
  versioning {
    enabled = true
  }
}

# terraform {
#   required_version = ">= 0.12"
#   backend "gcs" {
#     bucket      = "nexus-global-gsb"
#     credentials = "novel-nexus-monorepo-e9ba23c5fbe5.json"
#   }
# }