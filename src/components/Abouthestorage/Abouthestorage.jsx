import Title from "../Title/Title";

export default function Abouthestorage() {
  return (
    <>
        <div className="col-span-12 lg:col-span-3 space-y-15">
            <Title text={"عن ميدان التخزين"}/>
            <ol className=" list-disc px-2 lg:p-5 space-y-10 *:lg:text-[24px]">
                <li className="text-[20px] lg:w-full">ميدان التخزين مقرها في السعودية بمدينة الرياض، مرخص من هيئة الغذاء والدواء، تقوم بتقديم خدمات التخزين والدعم اللوجستي</li>
                <li className="text-[20px] lg:w-full">و تقديم افضل المستودعات بمواصفات عالية ملائمة لجميع الشركات و الجهات الحكومية</li>
            </ol>
        </div>
    </>
  )
}
