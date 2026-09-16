# mrp

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | mrp |
| Nome Amigável | Manufatura |
| Autor | Odoo S.A. |
| Versão | 16.0.2.1 |
| Repositório | https://www.odoo.com/app/manufacturing |

## Descrição

Módulo base de manufatura. Permite criar ordens de produção, listas de materiais e gerenciar o processo produtivo.

## Dependencies

- base
- mail
- product
- stock

## Models

### mrp.production
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Número da ordem |
| product_id | Many2one | Produto |
| product_qty | Float | Quantidade |
| state | Selection | Status |
| move_raw_ids | One2many | Matéria-prima |
| move_finished_ids | One2many | Produto final |

### mrp.bom
| Campo | Tipo | Descrição |
|-------|------|-----------|
| product_id | Many2one | Produto |
| bom_line_ids | One2many | Linhas da BOM |

## Views/Menus

- **Menu**: Manufatura > Ordens de Produção
- **Views**: tree, form, kanban, calendar, gantt

## Segurança

- **Grupos**: mrp.group_mrp_manager

## Configuração

- Configurações > Manufatura

## Notas de Migração

- Odoo 14 → 16: Novos campos e widgets
