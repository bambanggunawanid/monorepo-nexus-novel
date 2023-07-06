resource "google_compute_router_nat" "this" {
  name       = "${var.env}-nat"
  region     = var.region
  nat_ip_allocate_option = "AUTO_ONLY"
  router     = google_compute_router.this.name
  depends_on = [google_compute_router.this]
  source_subnetwork_ip_ranges_to_nat = "ALL_SUBNETWORKS_ALL_IP_RANGES"
}

resource "google_compute_global_address" "this" {
  name = "${var.env}-nat-ip"
  purpose = "EXTERNAL"
  address_type = "EXTERNAL"
}

resource "google_compute_firewall" "this" {
  name    = "${var.env}-nat-firewall"
  network = google_compute_network.this.name

  allow {
    protocol = "tcp"
    ports    = ["80", "443"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = [google_compute_router_nat.this.name]
}
