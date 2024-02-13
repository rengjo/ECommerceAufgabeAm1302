variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "eu-central-1"
}
variable "github_owner" {
  description = "GitHub repository owner"
  type        = string
  default     = "rengjo"
}

variable "github_repo" {
  description = "GitHub repository name"
  type        = string
  default     = "ECommerceAufgabeAm1302"
}

variable "github_branch" {
  description = "GitHub repository branch"
  type        = string
  default     = "main"
}

variable "github_token" {
  description = "GitHub OAuth token"
  type        = string
}

provider "github" {
  token = var.github_token
}