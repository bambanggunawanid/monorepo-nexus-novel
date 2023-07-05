# locals --> initialize the local variables to be used with the terragrunt.hcl file
locals {
  # Automatically load environment-level variables
  project_id = read_terragrunt_config(find_in_parent_folders("env-vars.hcl")).locals.project_id
  git_repo   = read_terragrunt_config(find_in_parent_folders("env-vars.hcl")).locals.git_repo
  branch     = read_terragrunt_config(find_in_parent_folders("env-vars.hcl")).locals.branch
}

# Define the location for the root tf-module
# terraform {
#   source = "${local.git_repo}//gcs?ref=${local.branch}"
#   source = "git@gitlab.com:jey_hp/terraform-modules.git//gcs?ref=master"
# }

# for the backend state prefix
# generated-prefix-path in the gcs bucket: /env/prod/global/gcs/default.tfstate
include {
  path = find_in_parent_folders()
}

terraform {
  source = "../../../modules/instance"
}

inputs = {
  instance_type = "e2-micro"
  instance_name = "example-server-dev"
  project_id    = local.project_id
  prefix        = "${local.project_id}"
  names         = ["Dev"] #interpolation example
  location      = "us-central1"
}