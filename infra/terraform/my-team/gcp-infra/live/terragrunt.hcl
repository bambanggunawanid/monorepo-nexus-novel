remote_state {
  backend = "gcs"
  generate = {
    path      = "state.tf"
    if_exists = "overwrite_terragrunt"
  }
  config = {
    bucket      = "nexus-global-gsb"
    prefix      = "${basename(get_parent_terragrunt_dir())}/${path_relative_to_include()}"
    project = "novel-nexus-monorepo"
    # credentials = "novel-nexus-monorepo-e9ba23c5fbe5.json"
  }
}

generate "provider" {
  path      = "provider.tf"
  if_exists = "overwrite_terragrunt"

  contents = <<EOF
  provider "google" {
    # credentials = file("novel-nexus-monorepo-e9ba23c5fbe5.json")
    project     = "novel-nexus-monorepo"
    region      = "us-central1"
  }
  EOF
}
