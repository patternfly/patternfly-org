require "erb"
include ERB::Util
module Jekyll
  class EscapeHtmlTag < Liquid::Block

    def initialize(tag_name, markup, tokens)
      @tag = markup
      super
    end

    def render(context)
      contents = super

      # pipe param through liquid to make additional replacements possible
      content = Liquid::Template.parse(contents).render context

      output = html_escape(content)
      output
    end

  end
end

Liquid::Template.register_tag('escape_html', Jekyll::EscapeHtmlTag)
