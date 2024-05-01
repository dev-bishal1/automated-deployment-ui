/* eslint-disable @typescript-eslint/no-explicit-any */
import InfoSection from '../components/home/InfoSection';
import RepoUrlSubmitForm from '../components/home/RepoUrlSubmitForm';
import { useSubmitRepoUrl } from '../hooks/repo.hook';
import { showErrorMessage, showSuccessMessage } from '../util/toast';

export interface RepoSubmitArgs {
  frontendRepoUrl: string;
}

const Home = () => {
  const { mutateAsync: submitRepoUrl, isPending } = useSubmitRepoUrl();

  const onRepoUrlSubmit = async (payload: RepoSubmitArgs) => {
    try {
      const response = await submitRepoUrl(payload);
      console.log(response);
      showSuccessMessage('Deployment request was successful. Thank you.');
    } catch (error: any) {
      showErrorMessage(error.message);
    }
  };
  return (
    <section
      id="home"
      className="welcome-hero flex justify-center items-center"
    >
      <div className="max-w-screen-md w-full mt-20">
        <InfoSection />
        <RepoUrlSubmitForm
          onRepoUrlSubmit={onRepoUrlSubmit}
          isLoading={isPending}
        />
      </div>
    </section>
  );
};

export default Home;
