# purchase_requisition

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | purchase_requisition |
| Nome Amigável | Acordos de Compra |
| Autor | Odoo S.A. |
| Versão | 16.0.0.1 |
| Repositório | https://www.odoo.com/app/purchase |

## Descrição

Permite criar acordos de compra (Call for Tender) para selecionar fornecedores.

## Dependências

- purchase
- stock

## Modelos Principais

### purchase.requisition
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Número do acordo |
| type_id | Many2one | Tipo de acordo |
| state | Selection | Status |
| line_ids | One2many | Linhas do acordo |

## Views/Menus

- **Menu**: Compras > Acordos de Compra
- **Views**: tree, form

## Segurança

- Herda permissões do módulo purchase

## Configuração

- Configurações > Compras > Acordos

## Notas de Migração

- Odoo 14 → 16: Call for Tender completamente redesenhado
