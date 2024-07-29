resource "aws_codeartifact_domain" "this" {
  domain = "semantic-release-domain"
}

resource "aws_codeartifact_repository" "this" {
  repository = "semantic-release-repo"
  domain     = aws_codeartifact_domain.this.domain
}
