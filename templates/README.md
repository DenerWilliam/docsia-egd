# Templates HTML — EGD

Templates reutilizaveis para criar paginas de documentacao e treinamento no padrao Odoo 16.

## Templates Disponiveis

| Template | Uso | Arquivo |
|----------|-----|---------|
| **Base** | Pagina generica com hero, nav, secoes, mermaid | `base.html` |
| **Treinamento** | Pagina de treinamento passo a passo | `treinamento.html` |
| **Comparativo** | Comparacao entre versoes do Odoo | `comparativo.html` |
| **Index** | Pagina indice com grid de cards | `index.html` |

## Como Usar

### 1. Copie o template
```bash
cp templates/treinamento.html treinamentos/05-novo-treinamento.html
```

### 2. Substitua as variaveis
Cada template usa variaveis no formato `{{NOME_VARIAVEL}}`. Substitua pelo conteudo desejado.

**Variaveis do template Treinamento:**
- `{{TITULO}}` — Titulo principal
- `{{SUBTITULO}}` — Descricao curta
- `{{MODULOS}}` — Modulos envolvidos

### 3. Edite o conteudo
- Adicione novas secoes copiando os blocos `.section`
- Adicione novos passos copiando os blocos `.step`
- Adicione diagramas Mermaid dentro de `.mermaid`
- Adicione alertas com as classes `.alert-info`, `.alert-warning`, `.alert-success`, `.alert-error`

## Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Primary | `#714B67` | Titulos, botoes, icones |
| Primary Dark | `#5A3A52` | Hover, textos escuros |
| Accent | `#9C6B8E` | Bordas, destaques |
| Success | `#2E7D32` | Alertas positivos |
| Warning | `#F57C00` | Alertas de atencao |
| Error | `#C62828` | Alertas de erro |
| Info | `#1565C0` | Alertas informativos |

## Classes CSS Disponiveis

### Alertas
- `.alert-info` — Azul informativo
- `.alert-warning` — Laranja atencao
- `.alert-success` — Verde sucesso
- `.alert-error` — Vermelho erro

### Tags
- `.tag-novo` — Verde (funcionalidade nova)
- `.tag-alterado` — Laranja (funcionalidade alterada)
- `.tag-removido` — Vermelho (funcionalidade removida)
- `.tag-mantido` — Azul (funcionalidade mantida)

### Grid
- `.modules-grid` — Grid responsivo de modulos
- `.module-card` — Card de modulo com codigo e descricao

---

*Templates criados para o projeto EGD — Odoo 16 Localizacao Brasileira OCA*
