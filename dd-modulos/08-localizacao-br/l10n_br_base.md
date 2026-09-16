# l10n_br_base

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_base |
| Nome Amigável | Base Localização Brasileira |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/l10n-brazil |

## Descrição

Base para localização brasileira: CNPJ, CPF, IE, CEP, etc.

## Dependencies

- account
- base

## Models

### res.partner (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| cnpj_cpf | Char | CNPJ/CPF |
| ie | Char | Inscrição Estadual |
| im | Char | Inscrição Municipal |

### res.company (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| cnpj_cpf | Char | CNPJ/CPF |
| ie | Char | Inscrição Estadual |

## Views/Menus

- Extende views de res.partner e res.company

## Segurança

- Herda permissões do módulo account

## Configuração

- Configurações > Empresa > CNPJ/CPF

## Notas de Migração

- Migrado para v16 pelo OCA
