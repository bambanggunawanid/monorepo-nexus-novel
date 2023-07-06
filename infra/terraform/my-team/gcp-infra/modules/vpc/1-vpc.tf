resource "google_compute_network" "this" {
  project                           = var.project_id
  name                              = "${var.network_name}-vpc"
  auto_create_subnetworks           = false
  description                       = "Network for ${var.env}"
  routing_mode                      = "GLOBAL"
}
