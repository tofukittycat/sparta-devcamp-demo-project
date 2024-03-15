import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/_component/ui/accordion';
import { Button } from '@/app/_component/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/_component/ui/card';

export default function OrdersAside() {
  return (
    <>
      <article className="sticky top-20 pt-10 ">
        <Card>
          <CardHeader>
            <CardTitle>결제 금액</CardTitle>
            <CardDescription>결제 전 마지막으로 체크하세요! 👀</CardDescription>
          </CardHeader>
          <CardContent>
            <article className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span>주문금액</span>
                <span className=" inline-flex items-center">20000 원</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span>쿠폰 사용</span>
                <span className=" inline-flex items-center">-5000 원</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span>포인트 사용</span>
                <span className=" inline-flex items-center ">-1000 원</span>
              </div>
              <hr className=" my-5 h-[1px]" />
              <div className="flex items-center justify-between mb-4">
                <span>최종 결제 금액</span>
                <span className=" inline-flex items-center ">... 원</span>
              </div>
              <div className="bg-slate-300 px-5 mb-5 border border-none rounded">
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger>결제 전 안내사항</AccordionTrigger>
                    <AccordionContent className=" max-h-16 overflow-auto">
                      환불 규정 유의사항 동의
                      <br />
                      · 전문가가 의뢰인의 주문 의뢰 내용에 맞게 용역을 제공하는
                      맞춤형 상품의 경우, 가분하거나 재판매하기 어려운 성격의
                      상품입니다. 주문 의뢰 내용에 따라 용역 등의 작업이 진행된
                      이후에는 「전자상거래법」 제17조 2항에 따라 원칙적으로
                      청약철회가 제한됩니다. 의뢰인은 서비스 상세페이지에 명시된
                      취소·환불 규정 또는 전문가와 별도 합의한 내용에 따라
                      청약철회를 요청할 수 있습니다.
                      <br />· 디지털 형태로 제작된 콘텐츠를 제공하는 상품의
                      경우, 콘텐츠 제공이 개시되면 서비스 제공이 완료된 것으로
                      간주합니다. 콘텐츠 제공이 개시된 이후에는 「전자상거래법」
                      제17조 2항에 따라 원칙적으로 청약철회가 제한됩니다.
                      의뢰인은 서비스 상세페이지에 등록된 디지털 콘텐츠의 일부를
                      미리 확인한 후 서비스를 구매할 수 있습니다.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-none">
                    <AccordionTrigger>개인정보 제3자 제공</AccordionTrigger>
                    <AccordionContent className=" max-h-16 overflow-auto">
                      제공받는 자
                      <br /> · 다이닝
                      <br /> 제공받는 자의 개인정보 이용 목적
                      <br /> · 전자상거래 계약 이행 및 서비스 제공, 의뢰인 확인,
                      고객상담, 상품/서비스의 배송 업무 처리 등 <br /> 제공하는
                      개인정보 항목 <br /> · 의뢰인 닉네임 <br /> 제공받는 자의
                      보유 기간
                      <br /> · 재화 또는 서비스의 제공 목적 달성 후 파기 <br />
                      <br />
                      회원은 개인정보의 제3자 제공 동의를 거부할 권리가 있으나,
                      이 경우 서비스 이용이 제한될 수 있습니다. 그 밖의 내용은
                      서비스 이용약관 및 개인정보처리방침에 따릅니다.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="text-center">
                위 내용을 확인하였고, 결제에 동의합니다.
              </div>
            </article>
            <Button className="w-full h-12">...원 결제하기</Button>
          </CardContent>
        </Card>
      </article>
    </>
  );
}
