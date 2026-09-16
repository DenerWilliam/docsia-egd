# queue_job

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | queue_job |
| Nome Amigável | Fila de Tarefas |
| Autor | Camptocamp SA, OCA |
| Versão | 16.0.3.2.1 |
| Repositório | https://github.com/OCA/queue |

## Descrição

Fila de tarefas assíncronas.

## Dependencies

- base

## Models

### queue.job
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome da tarefa |
| state | Selection | Status |
| func_name | Char | Função |

## Views/Menus

- **Menu**: Configurações > Fila de Tarefas
- **Views**: tree, form

## Segurança

- **Grupos**: base.group_system

## Configuração

- Configurações > Fila de Tarefas

## Notas de Migração

- Migrado para v16 pelo OCA
