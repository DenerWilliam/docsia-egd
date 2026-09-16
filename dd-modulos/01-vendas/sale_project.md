# sale_project

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sale_project |
| Nome Amigável | Vendas - Projeto |
| Autor | Odoo S.A. |
| Versão | 16.0.1.0 |
| Repositório | https://www.odoo.com/app/sales |

## Descrição

Integração entre vendas e projetos. Permite criar projetos automaticamente a partir de pedidos de venda.

## Dependências

- sale
- project

## Modelos Principais

### sale.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| project_id | Many2one | Projeto associado |

## Views/Menus

- Extende views de sale.order

## Segurança

- Herda permissões dos módulos sale e project

## Configuração

- Configurações > Vendas > Projetos

## Notas de Migração

- Módulo padrão Odoo
