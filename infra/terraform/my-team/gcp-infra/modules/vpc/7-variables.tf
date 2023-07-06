variable "env" {
  description = "Environment name."
  type        = string
}

variable "vpc_cidr_block" {
  description = "CIDR (Classless Inter-Domain Routing) for VPC network."
  type        = string
  default     = "10.0.0.0/16"
}

variable "network_name" {
  description = "Name of the VPC network."
  type        = string
  default     = "vpc"
}

variable "project_id" {
  description = "Project ID."
  type        = string
}

variable "region" {
  description = "Region for VPC network."
  type        = string
  default     = "us-central1"
}

variable "azs" {
  description = "Availability zones for subnets in GCP."
  type        = list(string)
}

variable "private_subnets" {
  description = "CIDR ranges for private subnets in GCP."
  type        = list(string)
}

variable "public_subnets" {
  description = "CIDR ranges for public subnets in GCP."
  type        = list(string)
}

variable "private_subnet_tags" {
  description = "Tags for private subnets in GCP."
  type        = map(any)
}

variable "public_subnet_tags" {
  description = "Tags for public subnets in GCP."
  type        = map(any)
}
