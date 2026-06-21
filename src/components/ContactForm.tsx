import { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    // Check if form already exists
    const container = document.getElementById('hubspot-form-container');
    if (!container || container.children.length > 0) {
      return;
    }

    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = 'https://js-eu1.hsforms.net/forms/v2.js';
    script.async = true;
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @ts-ignore - HubSpot global object
      if (window.hbspt) {
        const container = document.getElementById('hubspot-form-container');
        // Avoid creating the form twice (React StrictMode, re-mounts)
        if (!container || container.querySelector('form')) {
          return;
        }
        // @ts-ignore
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "147114190",
          formId: "3eb86170-1864-4c17-82c4-fd29587b406c",
          target: "#hubspot-form-container",
          // Disable HubSpot tracking cookies so form works regardless of cookie consent
          onFormReady: function() {
            // Remove hutk from form submissions
            const forms = document.querySelectorAll('#hubspot-form-container form');
            forms.forEach(form => {
              const hutkInput = form.querySelector('input[name="hutk"]');
              if (hutkInput) {
                hutkInput.remove();
              }
            });
          }
        });
        
        // Use MutationObserver to watch for form changes
        const observer = new MutationObserver(() => {
          const formContainer = document.getElementById('hubspot-form-container');
          if (!formContainer) return;
          
          // Find all paragraph and div elements that might contain consent text
          const allElements = formContainer.querySelectorAll('p, div, span');
          
          allElements.forEach((element) => {
            const el = element as HTMLElement;
            const text = el.textContent || '';
            
            // Check if this element contains the consent text
            if (text.includes('Vi bruger kun dine personoplysninger') && 
                el.dataset.processed !== 'true') {
              
              // Mark as processed
              el.dataset.processed = 'true';
              
              // Hide the consent text initially
              el.style.display = 'none';
              
              // Create toggle link
              const toggleLink = document.createElement('a');
              toggleLink.href = '#';
              toggleLink.textContent = 'Vis samtykketekst';
              toggleLink.style.cssText = 'display: block; margin-bottom: 8px; color: hsl(15, 100%, 52%); text-decoration: underline; cursor: pointer; font-size: 14px;';
              
              toggleLink.addEventListener('click', function(e) {
                e.preventDefault();
                const isHidden = el.style.display === 'none';
                el.style.display = isHidden ? 'block' : 'none';
                toggleLink.textContent = isHidden ? 'Skjul samtykketekst' : 'Vis samtykketekst';
              });
              
              // Insert toggle before the consent text
              el.parentNode?.insertBefore(toggleLink, el);
              
              // Stop observing once we found and processed the element
              observer.disconnect();
            }
          });
        });
        
        observer.observe(container, { childList: true, subtree: true });
      }
    });

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="kontakt" className="py-20 px-0 md:px-6 bg-muted/30">
      <div className="container max-w-5xl mx-auto">
        <div className="bg-background p-4 md:p-8 rounded-none md:rounded-2xl shadow-lg">
          <div id="hubspot-form-container"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
