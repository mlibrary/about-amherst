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
        repo: 'michigan-publishing/about-leverpress',
        branch: 'preview',
        auth_type: 'implicit',
        app_id: '1ad010fc364de8a6303468218779296589f4f424dd3284e42bf954cad431395b',
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
        repo: 'michigan-publishing/about-leverpress',
        branch: 'master',
        auth_type: 'implicit',
        app_id: '03d3fe1c9a36d44c83ea5d1f0382ac41333bd88052587631ae9fa15ce6b15123',
        api_root: 'https://gitlab.umich.edu/api/v4',
        base_url: 'https://gitlab.umich.edu',
        auth_endpoint: 'oauth/authorize'
      }
    }
  });
}
