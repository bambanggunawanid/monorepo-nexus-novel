provider "google" {
    project = "novel-nexus-monorepo"
    region  = "us-central1"
    zone    = "us-central1-c"
}

resource "google_compute_instance" "vm_instance" {
    name         = var.instance_name
    machine_type = var.instance_type
    tags = var.instance_tags
    labels = {
        name = var.instance_name
        environment = "dev"
    }
    boot_disk {
        initialize_params {
            image = "debian-cloud/debian-11"
        }
    }

  network_interface {
    network = "default"
    access_config {
    }
  }
}

resource "google_compute_network" "vpc_network" {
  name                    = "terraform-network"
  auto_create_subnetworks = "true"
}