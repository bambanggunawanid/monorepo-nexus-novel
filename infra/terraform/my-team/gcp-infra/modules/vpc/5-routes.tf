resource "google_compute_router" "this" {
  name    = "${var.env}-router"
  network = google_compute_network.this.self_link
}

resource "google_compute_route" "public" {
  name               = "${var.env}-public-route"
  network            = google_compute_network.this.self_link
  dest_range         = "0.0.0.0/0"
  next_hop_gateway   = google_compute_router_nat.this.name
  priority           = 1000
  tags               = [google_compute_router_nat.this.name]
}

resource "google_compute_route" "private" {
  count               = length(var.private_subnets)
  name                = "${var.env}-private-route-${var.azs[count.index]}"
  network             = google_compute_network.this.name
  dest_range          = "0.0.0.0/0"
  next_hop_instance   = google_compute_router_nat.this.name
  priority            = 100
  tags                = [google_compute_router_nat.this.name]
}

resource "google_compute_firewall" "allow-ssh" {
  name        = "allow-ssh"
  network     = google_compute_network.this.name
  target_tags = ["allow-ssh"]

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  source_ranges = ["0.0.0.0/0"]
}

resource "google_compute_firewall" "allow-http" {
  name        = "allow-http"
  network     = google_compute_network.this.name
  target_tags = ["allow-http"]

  allow {
    protocol = "tcp"
    ports    = ["80"]
  }

  source_ranges = ["0.0.0.0/0"]
}

resource "google_compute_firewall" "allow-https" {
  name        = "allow-https"
  network     = google_compute_network.this.name
  target_tags = ["allow-https"]

  allow {
    protocol = "tcp"
    ports    = ["443"]
  }

  source_ranges = ["0.0.0.0/0"]
}
