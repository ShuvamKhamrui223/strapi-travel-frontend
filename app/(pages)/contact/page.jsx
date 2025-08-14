import Container from "../../components/common/container";

const ContactPage = () => {
  return (
    <>
      <Container>
        <section className="min-h-[75vh] flex flex-col py-20 gap-8 items-center">
          <h2 className="text-4xl capitalize">get in touch</h2>
          <div className="w-full flex flex-col md:flex-row items-center">
            <div className="flex-1/2"></div>

            <form
              action=""
              className="flex-1/2 grid grid-rows-3 grid-cols-2 gap-1"
            >
              <input
                type="text"
                name=""
                id=""
                className="form-field col-start-1 mr-2 col-end-2"
                placeholder="your name"
              />
              <input
                type="email"
                name=""
                id=""
                className="form-field col-start-2 col-end-3"
                placeholder="your email"
              />
              <input
                type="text"
                name=""
                id=""
                className="form-field col-span-2"
                placeholder="subject"
              />
              <textarea
                name=""
                id=""
                rows={"4"}
                placeholder="message"
                className="form-field resize-none col-span-2"
              ></textarea>
            </form>
          </div>
        </section>
      </Container>
    </>
  );
};

export default ContactPage;
