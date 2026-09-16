# Data Dictionary - Web/UI

## Módulos

| Módulo | Nome | Autor | Versão |
|--------|------|-------|--------|
| web | Web | Odoo S.A. | 16.0.1.0 |
| web_editor | Editor Web | Odoo S.A. | 16.0.1.0 |
| web_tour | Tours | Odoo S.A. | 16.0.0.1 |
| web_responsive | Web Responsive | OCA | 16.0.1.4.0 |
| web_pwa_oca | Progressive web application | OCA | 16.0.1.0.0 |
| web_action_conditionable | web_action_conditionable | OCA | 16.0.1.0.0 |
| web_advanced_search | Advanced search | OCA | 16.0.1.0.6 |
| web_chatter_position | Chatter Position | OCA | 16.0.1.0.5 |
| web_environment_ribbon | Web Environment Ribbon | OCA | 16.0.1.0.0 |
| web_escodoo_brand | Web Escodoo Brand | Escodoo | 16.0.1.0.0 |
| web_kanban_gauge | Avaliar ferramenta para Kanban | Odoo S.A. | 16.0.1.0 |
| web_unsplash | Biblioteca de Imagens Unsplash | Odoo S.A. | 16.0.1.1 |
| web_widget_x2many_2d_matrix | 2D matrix for x2many fields | OCA | 16.0.1.1.4 |

## Dependências Principais

- `web` → `base`
- `web_editor` → `web`
- `web_responsive` → `web`

## Modelos Principais

### ir.actions.act_window
- Ações de janela
- Configuração de views

### ir.ui.view
- Definições de views
- Herança e extensão

### ir.module.module
- Gestão de módulos
- Instalação e atualização

## Notas

- Módulo `web` é a base para todos os outros módulos de interface
- Integração com todos os módulos do Odoo
