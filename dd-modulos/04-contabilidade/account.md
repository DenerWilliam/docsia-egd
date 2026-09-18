# account - Faturação

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account |
| Nome Amigável | Faturação |
| Autor | Odoo S.A. |
| Versão | 16.0.1.2 |
| Repositório | https://www.odoo.com/app/invoicing |
| Licença | LGPL-3 |

## Descrição

Módulo base para contabilidade e faturação. Permite criar faturas, gerenciar pagamentos, conciliação bancária e relatórios financeiros.

## Dependências

- `base`
- `product`

## Modelos Principais

### account.move
- Lançamentos contábeis
- Faturas, notas de crédito, cobranças

#### Campos Principais
| Campo | Tipo | Descrição |
|-------|------|-----------|
| move_type | Selection | Tipo de lançamento |
| partner_id | Many2one | Parceiro |
| invoice_line_ids | One2many | Linhas da fatura |
| state | Selection | Estado do lançamento |
| currency_id | Many2one | Moeda |

### account.move.line
- Linhas de lançamento
- Cálculo automático de impostos

#### Campos Principais
| Campo | Tipo | Descrição |
|-------|------|-----------|
| account_id | Many2one | Conta contábil |
| partner_id | Many2one | Parceiro |
| debit | Float | Débito |
| credit | Float | Crédito |
| tax_ids | Many2many | Impostos |

### account.account
- Plano de contas
- Configuração de tipos de conta

#### Campos Principais
| Campo | Tipo | Descrição |
|-------|------|-----------|
| code | Char | Código da conta |
| name | Char | Nome da conta |
| account_type | Selection | Tipo de conta |
| reconcile | Boolean | Conciliação |

## Views/Menus

- **Contabilidade**: Menu principal do módulo de contabilidade
- **Faturas**: Gestão de faturas
- **Lançamentos**: Gestão de lançamentos
- **Plano de Contas**: Configuração do plano de contas

## Segurança

- Grupos de acesso: `account.group_account_manager`, `account.group_account_user`
- Permissões por modelo configuradas em `ir.model.access.csv`

## Configuração

1. Instalar o módulo `account`
2. Configurar plano de contas
3. Configurar impostos
4. Configurar diários contábeis

## Notas de Migração

- v14 → v15: Compatível
- v15 → v16: Compatível
