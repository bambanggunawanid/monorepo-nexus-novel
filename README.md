# Novel Nexus NX Monorepo
Mono repo project for book recommendation and price

### Current Update
#### Code
- [x] Add Nx Workspace
- [x] Add ReactJS App
- [x] Add ReactJS Library
- [x] Add ReactJS Schematics
- [x] Add NestJS Library
- [x] Add NestJS Schematics
- [x] Add Team Access Control
- [ ] Add Storybook
#### CI/CD
- [x] Add Github Action
- [x] Add Github Action for Nx
- [x] Add Github Action for Nx ReactJS
- [x] Add Github Action for Nx NestJS
- [x] Add Github Action for Nx ReactJS Library
- [x] Add Github Action for Nx NestJS Library
#### DevOps
- [x] Add Terragrunt
- [x] Add Terraform Module
- [ ] Add Dockerfile for Nx
- [ ] Add Dockerfile for Nx ReactJS
- [ ] Add Dockerfile for Nx ReactJS Library
- [ ] Add Dockerfile for Nx NestJS
- [ ] Add Dockerfile for Nx NestJS Library
- [ ] Add Kubernetes for Nx

# Run Development Serve In Every Service:
## Apps Service
```bash
nx serve core-nexus-cloud-web
nx serve payment-payment-web
```
## Library Service
### api core
```bash
nx serve api-core-nexus-admin-account-nexus-account
nx serve api-core-nexus-admin-storage-nexus-cloud-storage
```
### api payment
```bash
nx serve api-payment-payment-admin-pay-backup-payment-backup
nx serve api-payment-payment-admin-pay-hub-payment-info
```

# Run Test In Every Service:
## Library Service
## Apps Service
```bash
nx test core-nexus-cloud-web
nx test payment-payment-web
```
### api core
```bash
nx test api-core-nexus-admin-account-nexus-account
nx test api-core-nexus-admin-storage-nexus-cloud-storage
```
### api payment
```bash
nx test api-payment-payment-admin-pay-backup-payment-backup
nx test api-payment-payment-admin-pay-hub-payment-info
```
