output "vpc_id" {
  value = google_compute_network.this.name
}

output "private_subnet_ids" {
  value = google_compute_subnetwork.private[*].name
}

output "public_subnet_ids" {
  value = google_compute_subnetwork.public[*].name
}

output "nat_ip" {
  value = google_compute_router_nat.this.nat_ips
}