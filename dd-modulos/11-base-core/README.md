# Data Dictionary - Base/Core

## Módulos

| Módulo | Nome | Autor | Versão |
|--------|------|-------|--------|
| base | Base | Odoo S.A. | 16.0.1.3 |
| base_automation | Regras de Ação Automáticas | Odoo S.A. | 16.0.1.0 |
| base_geolocalize | Partners Geolocation | Odoo S.A. | 16.0.2.1 |
| base_iban | IBAN Contas Bancárias | Odoo S.A. | 16.0.1.0 |
| base_import | Importação base | Odoo S.A. | 16.0.2.0 |
| base_optional_quick_create | Optional quick create | OCA | 16.0.1.0.0 |
| base_setup | Ferramentas de configuração inicial | Odoo S.A. | 16.0.1.0 |
| base_sparse_field | Sparse Fields | Odoo S.A. | 16.0.1.0 |
| base_tier_validation | Base Tier Validation | OCA | 16.0.4.0.2 |
| base_tier_validation_formula | Base Tier Validation Formula | OCA | 16.0.1.0.2 |
| base_view_inheritance_extension | Extended view inheritance | OCA | 16.0.1.2.2 |
| auth_admin_passkey | Authentification - System Administrator Passkey | OCA | 16.0.1.0.0 |
| auth_signup | Registo | Odoo S.A. | 16.0.1.0 |
| auth_totp | Autenticação Dois Fatores (ADF) | Odoo S.A. | 16.0.1.0 |
| auth_totp_portal | TOTPortal | Odoo S.A. | 16.0.1.0 |
| barcodes | Código de Barras | Odoo S.A. | 16.0.2.0 |
| barcodes_gs1_nomenclature | Código de barras - Nomenclatura GS1 | Odoo S.A. | 16.0.1.0 |
| bus | Estado IM | Odoo S.A. | 16.0.1.0 |
| contacts | Contactos | Odoo S.A. | 16.0.1.0 |
| digest | KPI Digests | Odoo S.A. | 16.0.1.1 |
| disable_odoo_online | Remove odoo.com Bindings | OCA | 16.0.1.0.0 |
| mail | Discussões | Odoo S.A. | 16.0.1.10 |
| mail_bot | OdooBot | Odoo S.A. | 16.0.1.2 |
| mail_bot_hr | mail_bot_hr | Odoo S.A. | 16.0.1.0 |
| mail_restrict_follower_selection | Restrict follower selection | OCA | 16.0.1.0.0 |
| phone_validation | Validação de Números de Telefone | Odoo S.A. | 16.0.2.1 |
| portal | Portal do Cliente | Odoo S.A. | 16.0.1.0 |
| portal_rating | Avaliação do Portal | Odoo S.A. | 16.0.1.0 |
| procurement_auto_create_group | Procurement Auto Create Group | OCA | 16.0.1.1.0 |
| product | Produtos & Listas de Preços | Odoo S.A. | 16.0.1.2 |
| product_brand | Product Brand Manager | OCA | 16.0.1.0.4 |
| product_code_unique | Unique Product Internal Reference | OCA | 16.0.1.0.1 |
| product_expiry | Products Expiration Date | Odoo S.A. | 16.0.1.0 |
| product_net_weight | Products - Net Weight | OCA | 16.0.1.0.1 |
| product_sequence | Product Sequence | OCA | 16.0.2.0.1 |
| project | Projeto | Odoo S.A. | 16.0.1.3 |
| project_key | Project key | OCA | 16.0.2.0.1 |
| rating | Avaliação do Cliente | Odoo S.A. | 16.0.1.1 |
| remove_odoo_enterprise | Remove Odoo Enterprise | OCA | 16.0.2.0.4 |
| resource | Recurso | Odoo S.A. | 16.0.1.1 |
| server_action_mass_edit | Mass Editing | OCA | 16.0.2.1.1 |
| spec_driven_model | Spec Driven Model | OCA | 16.0.3.1.2 |
| spreadsheet | Planilha | Odoo S.A. | 16.0.1.0 |
| spreadsheet_dashboard | Dashboard da Planilha | Odoo S.A. | 16.0.1.0 |
| sql_request_abstract | SQL Request Abstract | OCA | 16.0.1.0.0 |
| tracking_manager | Tracking Manager | OCA | 16.0.1.1.10 |
| uom | Unidades de medida | Odoo S.A. | 16.0.1.0 |
| uom_alias | UOM Alias | OCA | 16.0.1.0.1 |
| utm | UTM Trackers | Odoo S.A. | 16.0.1.1 |
| http_routing | Web Routing | Odoo S.A. | 16.0.1.0 |
| board | Painéis | Odoo S.A. | 16.0.1.0 |
| payment | Intermediário de Pagamento | Odoo S.A. | 16.0.2.0 |
| payment_custom | Instituição de Pagamentos por Transferência | Odoo S.A. | 16.0.2.0 |

## Dependências Principais

- `base` → (nenhuma)
- `product` → `base`
- `mail` → `base`

## Modelos Principais

### res.partner
- Campo principal de parceiros
- Integração com todos os módulos

### res.company
- Empresas
- Configuração fiscal e contábil

### ir.module.module
- Gestão de módulos
- Instalação e atualização

## Notas

- Módulo `base` é a base para todos os outros módulos do Odoo
- Integração com todos os módulos do sistema
