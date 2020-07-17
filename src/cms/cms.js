import CMS from 'netlify-cms-app';
import LinkFileComponent from "./components/linkFileComponent"

CMS.registerEditorComponent(LinkFileComponent);

// https://github.com/netlify/netlify-cms/issues/1737 and HELIO-3241
window.CMS_MANUAL_INIT = true;

if (process.env.BRANCH === "preview") {
  console.log("---- USING PREVIEW BACKEND ----")
  CMS.init({
    config: {
      backend: {
        name: 'gitlab',
        repo: 'michigan-publishing/about-amherstpress',
        branch: 'preview',
        auth_type: 'implicit',
        app_id: '',
        api_root: 'https://gitlab.umich.edu/api/v4',
        base_url: 'https://gitlab.umich.edu',
        auth_endpoint: 'oauth/authorize'
      }
    }
  });
} else {
  CMS.init({
    config: {
      backend: {
        name: 'gitlab',
        repo: 'michigan-publishing/about-amherstpress',
        branch: 'master',
        auth_type: 'implicit',
        app_id: '',
        api_root: 'https://gitlab.umich.edu/api/v4',
        base_url: 'https://gitlab.umich.edu',
        auth_endpoint: 'oauth/authorize'
      }
    }
  });
}
