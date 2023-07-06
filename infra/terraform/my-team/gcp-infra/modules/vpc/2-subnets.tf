resource "google_compute_subnetwork" "private" {
  count                     = length(var.private_subnets)
  name                      = "${var.env}-private-${var.azs[count.index]}"
  ip_cidr_range             = var.private_subnets[count.index]
  region                    = var.region
  private_ip_google_access  = true
  network                   = google_compute_network.this.id

  secondary_ip_range {
    range_name    = "tf-test-secondary-range-update1"
    ip_cidr_range = "192.168.10.0/24"
  }
}

resource "google_compute_subnetwork" "public" {
  count                     = length(var.public_subnets)
  name                      = "${var.env}-public-${var.azs[count.index]}"
  ip_cidr_range             = var.public_subnets[count.index]
  region                    = var.region
  network                   = google_compute_network.this.id
}