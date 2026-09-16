# {{MODULO_NOME}}

{{MODULO_DESCRICAO}}

## Informacoes Gerais

| Campo | Valor |
|-------|-------|
| **Nome Tecnico** | `modulo_tecnico` |
| **Descricao** | Descricao completa do modulo |
| **Tipo** | Escodoo / OCA / Odoo SA |
| **Dependencias** | `modulo_dep_1`, `modulo_dep_2` |
| **Categorias** | Vendas, Compras, Estoque, etc. |

---

## Funcionalidades

### Funcionalidade 1

{{FUNC1_DESC}}

**Como usar:**
1. Acesse o menu: `Menu > Submenu > Opcao`
2. Clique em "Criar"
3. Preencha os campos obrigatorios
4. Confirme

**Campos principais:**
| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|-------------|-----------|
| `campo_1` | Texto | Sim | Descricao do campo |
| `campo_2` | Numerico | Nao | Descricao do campo |
| `campo_3` | Selecao | Sim | Opcao A, Opcao B |

---

### Funcionalidade 2

{{FUNC2_DESC}}

**Como usar:**
1. Acesse o menu: `Menu > Submenu > Opcao`
2. Selecione o registro
3. Clique em "Acao"
4. Confirme

---

## Integracao com Outros Modulos

### Modulo A (`modulo_a`)

{{INTEGRACAO_A}}

### Modulo B (`modulo_b`)

{{INTEGRACAO_B}}

---

## Campos Personalizados

| Campo | Tipo | Tamanho | Descricao |
|-------|------|---------|-----------|
| `x_campo_1` | Char | 50 | Descricao |
| `x_campo_2` | Integer | - | Descricao |
| `x_campo_3` | Selection | - | Opcao A, Opcao B |
| `x_campo_4` | Float | - | Descricao |
| `x_campo_5` | Many2one | - | Tabela Relacionada |

---

## Views (Telas)

### Formulario Principal

```xml
<record id="view_form" model="ir.ui.view">
    <field name="name">modulo.form</field>
    <field name="model">modulo.modelo</field>
    <field name="arch" type="xml">
        <form>
            <sheet>
                <group>
                    <group>
                        <field name="campo_1"/>
                        <field name="campo_2"/>
                    </group>
                    <group>
                        <field name="campo_3"/>
                        <field name="campo_4"/>
                    </group>
                </group>
            </sheet>
        </form>
    </field>
</record>
```

### Tree View (Lista)

```xml
<record id="view_tree" model="ir.ui.view">
    <field name="name">modulo.tree</field>
    <field name="model">modulo.modelo</field>
    <field name="arch" type="xml">
        <tree>
            <field name="campo_1"/>
            <field name="campo_2"/>
            <field name="campo_3"/>
        </tree>
    </field>
</record>
```

---

## Acessos e Permissoes

### Grupos de Acesso

| Grupo | Descricao | Permissoes |
|-------|-----------|------------|
| `grupo_usuario` | Usuario basico | Ler, Criar, Alterar |
| `grupo_admin` | Administrador | Ler, Criar, Alterar, Excluir |

### Regras de Acesso

```python
access_modulo_user, modulo.model_user, model_modulo_model, grupo_usuario, 1,1,1,0
access_modulo_admin, modulo.model_admin, model_modulo_model, grupo_admin, 1,1,1,1
```

---

## Dados de Demonstracao

### Registro Exemplo 1

| Campo | Valor |
|-------|-------|
| `campo_1` | Valor exemplo |
| `campo_2` | 100 |
| `campo_3` | opcao_a |

---

## Erros Comuns

| Erro | Causa | Solucao |
|------|-------|---------|
| **Erro 1** | Descricao | Correcao |
| **Erro 2** | Descricao | Correcao |

---

## Historico de Alteracoes

| Versao | Data | Autor | Descricao |
|--------|------|-------|-----------|
| 16.0.1.0.0 | DD/MM/AAAA | Autor | Versao inicial |

---

*Documentacao gerada automaticamente — Odoo 16 Localizacao Brasileira OCA*
