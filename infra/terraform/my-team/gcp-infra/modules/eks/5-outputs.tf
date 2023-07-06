output "gke_cluster_name" {
  value = google_container_cluster.this.name
}

output "gke_cluster_location" {
  value = google_container_cluster.this.location
}

output "gke_openid_provider_issuer" {
  value = google_container_cluster.this.oidc_issuer
}
