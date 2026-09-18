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
```

---

## Migracao

| De -> Para | Complexidade | Tempo Estimado | Principal Mudanca Visual |
|-----------|--------------|----------------|--------------------------|
| v14 -> v15 | Baixa | 1-2 dias | Poucas mudancas |
| v15 -> v16 | Baixa | 1-2 dias | Botoes removidos, presenca |

---

## Notas

- Indicador de presenca e a maior novidade visual em v16
- Foto com zoom melhora experiencia
- Treinamento necessario para novos recursos
