import { useMutation } from '@tanstack/react-query';
import { post } from '../api/client';

export const useSubmitRepoUrl = () =>
  useMutation({
    mutationFn: (body: object) => post({ url: 'api/v1/repo-url', body }),
  });
