import { Stack, Typography } from "@mui/material";
import { Link } from "react-router";

interface Props {
  title: string;
  url?: string;
  linkText?: string;
}

function TitleWithLink({ title, url, linkText = "Ver tudo" }: Props) {
  return (
    <Stack
      px={2}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography fontSize={17} lineHeight="22px" fontWeight={600} noWrap>
        {title}
      </Typography>
      {url && linkText && (
        <Link to={url}>
          <Typography
            width="max-content"
            fontWeight={400}
            fontSize={15}
            lineHeight="20px"
          >
            {linkText}
          </Typography>
        </Link>
      )}
    </Stack>
  );
}

export default TitleWithLink;
