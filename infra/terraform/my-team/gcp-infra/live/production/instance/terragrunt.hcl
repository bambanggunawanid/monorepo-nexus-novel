# Automatically find the root terragrunt.hcl and inherit its
# configuration
include {
  path = find_in_parent_folders()
}

terraform {
  source = "../../../modules/instance"
}

inputs = {
  instance_type = "e2-micro"
  instance_name = "example-server-production"
}