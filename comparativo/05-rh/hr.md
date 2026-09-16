# Comparativo: hr (Funcionarios) — Mudancas Visuais

## Informacoes do Modulo

| Campo | Valor |
|-------|-------|
| Nome Tecnico | hr |
| Nome Amigavel | Funcionarios |
| Autor | Odoo S.A. |
| Repositorio | https://www.odoo.com/app/employees |

## Disponibilidade por Versao

| Versao | Status | Observacoes |
|--------|--------|-------------|
| Odoo 14 | ✅ Disponivel | Versao estavel |
| Odoo 15 | ✅ Disponivel | Mantido pela Odoo |
| Odoo 16 | ✅ Disponivel | Versao LTS |
| Odoo 17 | ✅ Disponivel | Atualizado para OWL |
| Odoo 18 | ✅ Disponivel | Compativel |
| Odoo 19 | ✅ Disponivel | Funcional |

---

## Mudancas Visuais Detalhadas

### Odoo 14 → Odoo 16

#### Formulario do Funcionario

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Botoes Editar/Salvar** | Dois botoes grandes | **REMOVIDOS** | Edicao inline |
| **Foto do funcionario** | Basica | Com zoom e preview | Foto maior, mais detalhes |
| **Nome** | Campo simples | Campo com botao de chat | Clica no icone e inicia conversa |
| **Titulo** | Estatico | Dinamico (Nome + Cargo) | Ve nome e cargo juntos |
| **Ribbon "Arquivado"** | Nao existia | Faixa vermelha no canto | Sabe se esta ativo de relance |
| **Help por campo** | Nao existia | Icone (?) ao lado | Tira duvidas |
| **Internal Link** | Nao existia | Link nos Many2one | Clica e abre registro |

#### Presenca (Novo!)

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Indicador de presenca** | Nao existia | Botao no topo com status | Ve se esta presente, ausente, etc. |
| **Icones** | Nao existia | Verde (presente), Amarelo (ausente), Vermelho (ferias) | Status visual imediato |

#### Abas do Formulario

| Aba | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|-----|-----------------|-------------------|-------------------|
| **Work Information** | Aba basica | Mais campos, mais organizada | Mais informacoes de trabalho |
| **Private Information** | Aba basica | Mais campos, melhor organizada | Mais dados pessoais |
| **HR Settings** | Aba basica | Configuracoes mais acessiveis | Mais facil de configurar |

---

### Odoo 16 → Odoo 17

| Elemento | Odoo 16 (Antes) | Odoo 17 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Menu Lateral** | Icones + texto | Icones apenas | Menu mais limpo |
| **Search Bar** | Barra classica | Chips de filtro | Filtros como pills |
| **Kanban** | Cards com bordas | Cards clean, foto maior | Visual mais bonito |
| **Form** | Estrutura padrao | Mais espacamento | Mais respiro |

#### Kanban de Funcionarios

| Elemento | Odoo 16 (Antes) | Odoo 17 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Foto** | Tamanho medio | Foto maior e mais destacada | Funcionario mais visivel |
| **Informacoes** | Basicas | Mais dados no card | Ve mais sem abrir |
| **Presenca** | Indicador simples | Indicador mais visivel | Status mais claro |

---

### Odoo 17 → Odoo 18

| Elemento | Odoo 17 (Antes) | Odoo 18 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **AI HR** | Nao existia | Sugestoes de gestao | IA sugere acoes para funcionario |
| **Onboarding** | Basico | Assistido por IA | IA cria plano de onboarding |

---

### Odoo 18 → Odoo 19

| Elemento | Odoo 18 (Antes) | Odoo 19 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **AI HR** | Sugestoes basicas | Gestao assistida por IA | IA gerencia tarefas de RH |
| **Onboarding** | Assistido | Automatico | IA cria e acompanha onboarding |

---

## Fluxo Visual: Cadastrar Funcionario

```
ODOO 14:
1. Clica "Criar" (canto esquerdo)
2. Preenche dados pessoais
3. Preenche dados de trabalho
4. Faz upload da foto
5. Clica "Salvar" (botao grande)

ODOO 16:
1. Clica "Criar" (canto direito)
2. Preenche dados (edicao inline, salva automaticamente)
3. Faz upload da foto (com zoom)
4. Ve indicador de presenca
5. **Sem necessidade de salvar manualmente**

ODOO 17+:
1. Clica "+" (canto direito)
2. Preenche dados (edicao inline)
3. Foto com zoom
4. IA sugere configuracoes
5. Onboarding automatico
```

---

## Breaking Changes

### v16 → v17
- Views redesenhadas para OWL
- Kanban de funcionarios redesenhado
- Botoes de acao visualmente menores

### v17 → v18
- APIs de IA podem exigir configuracao
- Novos campos de AI no formulario

### v18 → v19
- AI HR pode automatizar gestao

---

## Migracao

| De -> Para | Complexidade | Tempo Estimado | Principal Mudanca Visual |
|-----------|--------------|----------------|--------------------------|
| v14 -> v15 | Baixa | 1-2 dias | Poucas mudancas |
| v15 -> v16 | Baixa | 1-2 dias | Botoes removidos, presenca |
| v16 -> v17 | Media | 2-3 dias | Menu lateral, kanban |
| v17 -> v18 | Baixa | 1-2 dias | AI features |
| v18 -> v19 | Baixa | 1-2 dias | AI avancado |

---

## Notas

- Indicador de presenca e a maior novidade visual em v16
- Foto com zoom melhora experiencia
- Treinamento necessario para novos recursos
