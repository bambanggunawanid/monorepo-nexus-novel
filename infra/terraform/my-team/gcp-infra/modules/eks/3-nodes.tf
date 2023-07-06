resource "google_container_node_pool" "this" {
  for_each = var.node_groups

  name             = each.key
  location         = var.gke_location
  cluster          = google_container_cluster.this.name
  initial_node_count = each.value.scaling_config.desired_size

  node_config {
    machine_type = each.value.instance_types[0]  # Assuming only one instance type per node group

    labels = {
      role = each.key
    }

    tags = var.node_tags
  }

  management {
    auto_upgrade          = true
    auto_repair           = true
    upgrade_options {
      auto_upgrade_start_time = "00:00"
      description             = "Auto upgrade node pool"
    }
  }
}
