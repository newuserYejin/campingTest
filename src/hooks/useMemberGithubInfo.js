import { useQueries } from "@tanstack/react-query";
import apiGithub from "../utils/apiGithub";

export const useMemeberGithubInfoQuery = (members) =>
  useQueries({
    queries: members.map((member) => {
      return {
        queryKey: ["member-github-info", member.id],
        queryFn: () => apiGithub.get(`/users/${member.id}`),
        retry: 1,
        cacheTime: 7 * 24 * 60 * (60 * 1000),
        select: (result) => result.data,
      };
    }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });
