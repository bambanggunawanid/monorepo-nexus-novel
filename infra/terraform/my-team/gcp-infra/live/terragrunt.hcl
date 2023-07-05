# remote_state {
#   backend = "gcs" {}
#   config = {
#     project  = "novel-nexus-monorepo"
#     location = "us-central1"
#     bucket   = "nexus-global-gsb"
#     prefix   = "${basename(get_parent_terragrunt_dir())}/${path_relative_to_include()}"
#   }
# }

remote_state {
  backend = "local"
  generate = {
    path      = "backend.tf"
    if_exists = "overwrite_terragrunt"
  }

  config = {
    path = "${path_relative_to_include()}/terraform.tfstate"
  }
}

generate "provider" {
  path = "provider.tf"
  if_exists = "overwrite_terragrunt"

  contents = <<EOF
provider "aws" {
    region = "us-east-1"
}
EOF
}