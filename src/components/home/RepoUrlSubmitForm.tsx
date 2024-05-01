import { useState } from 'react';
import { RepoSubmitArgs } from '../../page/Home';
import Button from '../button/Button';
import InputField from '../form/InputField';
import { showErrorMessage } from '../../util/toast';

interface RepoUrlSubmitFormProps {
  onRepoUrlSubmit: (val: RepoSubmitArgs) => unknown;
  isLoading: boolean;
}

const GITHUB_REPO_URL_CHECK_REGEX =
  /^https:\/\/github\.com\/([a-zA-Z0-9-]+)\/([a-zA-Z0-9-]+)(\/)?$/;

const RepoUrlSubmitForm: React.FC<RepoUrlSubmitFormProps> = ({
  isLoading,
  onRepoUrlSubmit,
}) => {
  const [frontendRepoUrl, setFrontendRepoUrl] = useState('');

  const isValidGithubRepoUrl = (url: string) => {
    return GITHUB_REPO_URL_CHECK_REGEX.test(url);
  };

  const checkIfValidPayload = () => {
    const isValidFrontendRepoUrl = isValidGithubRepoUrl(frontendRepoUrl);
    if (!isValidFrontendRepoUrl) {
      showErrorMessage('Please submit only valid Github public repo url.');
      return;
    }

    return true;
  };

  const handleSubmit = () => {
    const isValidPayload = checkIfValidPayload();
    if (!isValidPayload) return;

    onRepoUrlSubmit({
      frontendRepoUrl,
    });
  };
  return (
    <>
      <InputField
        label="Frontend Repository Url"
        name="frontendUrl"
        value={frontendRepoUrl}
        type="text"
        onChange={(e) => {
          setFrontendRepoUrl(e.target.value);
        }}
      />

      <div className="mt-10 w-80">
        <Button title="Submit" disabled={isLoading} onClick={handleSubmit} />
      </div>
    </>
  );
};

export default RepoUrlSubmitForm;
