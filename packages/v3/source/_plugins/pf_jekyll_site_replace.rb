module Jekyll
  module SiteReplaceFilter
    def site_replace(input)
      input.gsub(/https?:\/\/www.patternfly.org\//, "/")
    end
  end
end

Liquid::Template.register_filter(Jekyll::SiteReplaceFilter)
