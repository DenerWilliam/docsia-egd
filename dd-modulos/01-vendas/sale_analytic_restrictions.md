# sale_analytic_restrictions

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sale_analytic_restrictions |
| Nome Amigável | Sale Analytic Restrictions |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/account-addons |

## Descrição

Módulo customizado pela Escodoo para adicionar restrições de centros de custo analíticos em vendas.

## Dependências

- sale
- analytic_restrictions

## Modelos Principais

### sale.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| analytic_account_id | Many2one | Centro de custo (com restrições) |

## Views/Menus

- Extende views de sale.order

## Segurança

- Herda permissões do módulo sale

## Configuração

- Configurar restrições analíticas em Contabilidade > Configuração > Restrições Analíticas

## Notas de Migração

- Customização Escodoo para atender necessidades específicas do cliente
