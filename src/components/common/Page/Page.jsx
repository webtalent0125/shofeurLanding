import { Meta } from '@/components/common/Meta/Meta';

const Page = (props) => {
  return (
    <>
      <Meta title={props.title} description={props.description} />
      <main>{props.children}</main>
    </>
  );
};

export { Page };
