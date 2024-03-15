import NHNAuthentication from '../../_component/NHNAuthentication';
import OrdersAarticle from '../../_component/OrdersArticle';
import OrdersAside from '../../_component/OrdersAside';
import PaymentAmount from '../../_component/PaymentAmount';
import PaymentMethod from '../../_component/PaymentMethod';

export default function page() {
  return (
    <div className="container w-full max-w-screen-xl grow flex flex-col flex-wrap mx-auto">
      <div className="md:ml-0 md:space-x-0 relative">
        <div className="flex flex-col gap-10 md:flex-grow md:flex-row">
          <article className="flex-1 max-w-7xl w-full md:w-auto">
            <h1 className="font-semibold text-2xl my-10">결제</h1>
            <OrdersAarticle />
            <NHNAuthentication />
            <PaymentAmount />
            <PaymentMethod />
          </article>
          <aside className="flex-[0_0_366px] w-full mt-10 md:mt-5 md:ml-0">
            <OrdersAside />
          </aside>
        </div>
      </div>
    </div>
  );
}
