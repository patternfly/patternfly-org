require "set"

module Jekyll
  class SitePatternLibraryGenerator < Jekyll::Generator
    def generate(site)
      libs = Array.new
      pages = Array.new
      site.pages.each do |page|
        parts = page.url.split('/')
        if ( parts[1] == 'pattern-library' && !parts[2].nil?)
          lib = parts[2]
          pages.push(page)
          # lib = page.url
          libs.push(lib) unless libs.include?(lib)
        end
      end
      site.config['patternLibraries'] = libs.sort
      site.config['patternPages'] = pages
    end
  end
end
