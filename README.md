# Novel Nexus NX Monorepo
Mono repo project for book recommendation and price

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
