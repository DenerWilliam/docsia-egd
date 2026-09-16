# sale_timesheet

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sale_timesheet |
| Nome Amigável | Registo de Horas das Vendas |
| Autor | Odoo S.A. |
| Versão | 16.0.1.0 |
| Repositório | https://www.odoo.com/app/sales |

## Descrição

Registro de horas em vendas. Permite associar apontamento de horas a pedidos de venda.

## Dependências

- sale
- hr_timesheet
- project

## Modelos Principais

### sale.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| timesheet_ids | One2many | Apontamentos de horas |

## Views/Menus

- Extende views de sale.order

## Segurança

- Herda permissões dos módulos sale e hr_timesheet

## Configuração

- Configurações > Vendas > Tempo

## Notas de Migração

- Módulo padrão Odoo
