<script lang="ts" context="module">
  export interface RawHTMLProps {
    as?: keyof HTMLElementTagNameMap;
    content?: unknown;
    className?: string;
  }
</script>

<script lang="ts">
  export let as: RawHTMLProps['as'] = 'span',
    content: RawHTMLProps['content'] = undefined;

  let className: RawHTMLProps['className'] = $$restProps.class ?? ``;
  export { className as class };

  function html(node: { innerHTML: unknown }, content: unknown) {
    node.innerHTML = content;
    return {
      update(content: unknown) {
        node.innerHTML = content;
      },
    };
  }
</script>

<svelte:element this={as} class={className} use:html={content} {...$$restProps}
></svelte:element>
