<>

<Form.Group controlId="formFile" className="mb-3">
<Form.Control type="email" placeholder="name@example.com" />
<Form.Control type="text" placeholder="rfgtdhfygu" onChange={updateField} required name="" id="" />
<Form.Control
  type="text"
  as="textarea"
  placeholder="Leave a comment here"
  style={{ height: "100px" }}
/>
</Form.Group>




///////////////////////////////////


<Form onSubmit={console.log}>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Title"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Sub_Title"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>

          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_created_by"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
        </Row>

        <hr />

        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="number"
              placeholder="Recipe_Preparation_Time"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="number"
              placeholder="Recipe_Cooking_Time"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="number"
              placeholder="Recipe_Serves"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <DropdownButton
              title="Recipe_Difficulty"
              name=""
              id=""
              onSelect={handleSelect}
              variant="success"
            >
              <Dropdown.Item eventKey="Easy">Easy</Dropdown.Item>
              <Dropdown.Item eventKey="Medium">Medium</Dropdown.Item>
              <Dropdown.Item eventKey="Hard">Hard</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>

        <hr />

        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <h5>Recipe Picture</h5>
            <Form.Control type="file" />
          </Col>
        </Row>
        <hr />
        <h3>Recipe Methods</h3>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Method1"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Method2"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Method3"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Method4"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Method5"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Method6"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Method7"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Method8"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Method9"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Method10"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Method11"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Method12"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
        </Row>

        <hr />

        <h3>Recipe Ingredients</h3>

        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient1"
              onChange={updateField}
              required
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient2"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient3"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient4"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient5"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient6"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient7"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient8"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient9"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient10"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient11"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Ingredient12"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
        </Row>
        <hr />
        <h3>Recipe_Tags</h3>

        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag1"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag2"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag3"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag4"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag5"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag6"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag7"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag8"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag9"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag10"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag11"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
          <Col xs lg="2">
            <Form.Control
              type="text"
              placeholder="Recipe_Tag12"
              onChange={updateField}
              
              name=""
              id=""
              style={{ backgroundColor: bgColors.Green }}
            />
          </Col>
        </Row>

        <hr />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
///////////////////////////////////



return (
    <div>
      <div>
        <h1>Sign Up page</h1>
      </div>
      <UploadImg />
      <br/>
      <br/>
      <br/>
      <form onSubmit={printValues}>
        <div className="labels">
          <label>
            <p> User_Name:</p>
            <input
              required
              value={form.User_User_Name}
              name="User_User_Name"
              onChange={updateField}
              id="User_User_Name"
              minLength="4"
              maxLength="44"
              type="text"
              placeholder="User_Name"
            />
          </label>
          <label>
            <p> Email:</p>
            <input
              required
              value={form.User_Email}
              name="User_Email"
              onChange={updateField}
              type="email"
              id="User_Email"
              minLength="4"
              maxLength="44"
              placeholder="Email"
            />
          </label>
        </div>

        <hr />
        <div className="labels">
          <label>
            <p> First_Name:</p>
            <input
              required
              value={form.User_First_Name}
              name="User_First_Name"
              onChange={updateField}
              id="name"
              minLength="4"
              maxLength="44"
              type="text"
              placeholder="First_Name"
            />
          </label>

          <label>
            <p> Last_Name:</p>
            <input
              required
              value={form.User_Last_Name}
              name="User_Last_Name"
              onChange={updateField}
              id="User_Last_Name"
              minLength="4"
              maxLength="44"
              type="text"
              placeholder="Last_Name"
            />
          </label>
        </div>

        <hr />
        <div className="labels">
          <label>
            <p> Gender:</p>
            <input
              required
              value={form.User_Gender}
              name="User_Gender"
              onChange={updateField}
              id="User_Gender"
              minLength="3"
              maxLength="44"
              type="text"
              placeholder="Gender"
            />
          </label>

          <label>
            <p> Age:</p>
            <input
              required
              value={form.User_Age}
              name="User_Age"
              onChange={updateField}
              type="number"
              id="User_Age"
              minLength="4"
              maxLength="44"
              placeholder="Age"
            />
          </label>
        </div>

        <hr />
        <div className="labels">
          <label>
            <p> Location:</p>
            <input
              required
              value={form.User_Location}
              name="User_Location"
              onChange={updateField}
              id="User_Location"
              minLength="4"
              maxLength="44"
              type="text"
              placeholder="Location"
            />
          </label>
          <label>
            <p> Website:</p>
            <input
              required
              value={form.User_Website}
              name="User_Website"
              onChange={updateField}
              type="url"
              id="User_Website"
              minLength="4"
              maxLength="44"
              placeholder="Website"
            />
          </label>
        </div>
        <hr />

        <div className="labels">
          <label>
            <p> Pictures:</p>
            <input
              required
              value={form.User_Pictures}
              name="User_Pictures"
              onChange={updateField}
              id="User_Pictures"
              minLength="4"
              maxLength="44"
              type="text"
              placeholder="Pictures"
            />
          </label>

          <label>
            <p> Text:</p>
            <input
              aria-label="minimum height"
              placeholder="Bio"
              required
              value={form.User_Text}
              name="User_Text"
              onChange={updateField}
              id="User_Text"
              minLength="4"
              maxLength="444"
              type="text"
            />
          </label>
        </div>
        <hr />
       

        <button>Submit</button>
        <br />
        <br />
        <br />
      </form>
    </div>
  );
}

///////////////////////////////////
///////////////////////////////////





<form onSubmit={printValues}>


<div className="labels">
  <Form.Label>
    <input
      required
      value={form.Recipe_Title}
      name="Recipe_Title"
      onChange={updateField}
      id="Recipe_Title"
      inlength="4"
      maxLength="44"
      type="text"
      placeholder="Recipe_Title"
    />
  </Form.Label>
  <Form.Label>
    <input
      required
      value={form.Recipe_Sub_Title}
      name="Recipe_Sub_Title"
      onChange={updateField}
      id="Recipe_Sub_Title"
      inlength="4"
      maxLength="44"
      type="text"
      placeholder="Recipe_Sub_Title"
    />
  </Form.Label>
</div>



<div className="labels">
  <Form.Label>
    <input
      required
      value={form.Recipe_Difficulty}
      name="Recipe_Difficulty"
      onChange={updateField}
      id="Recipe_Difficulty"
      maxLength="44"
      type="text"
      placeholder="Recipe_Difficulty"
    />
  </Form.Label>
  <Form.Label>
    <input
      onKeyDown={formatInput}
      required
      value={form.Recipe_Preparation_Time}
      name="Recipe_Preparation_Time"
      onChange={updateField}
      id="Recipe_Preparation_Time"
      maxLength="44"
      type="number"
      placeholder="Recipe_Preparation_Time"
      onPaste={handlePaste}
    />
  </Form.Label>
</div>
<br />

<div className="labels">
  <Form.Label>
    <input
      onKeyDown={formatInput}
      required
      value={form.Recipe_Cooking_Time}
      name="Recipe_Cooking_Time"
      onChange={updateField}
      id="Recipe_Cooking_Time"
      maxLength="44"
      type="number"
      placeholder="Recipe_Cooking_Time"
      onPaste={handlePaste}
    />
  </Form.Label>
  <Form.Label>
    <input
      onKeyDown={formatInput}
      required
      value={form.Recipe_Serves}
      name="Recipe_Serves"
      onChange={updateField}
      id="Recipe_Serves"
      maxLength="44"
      type="number"
      placeholder="Recipe_Serves"
      onPaste={handlePaste}
    />
  </Form.Label>
</div>

<div className="labels">
  <Form.Label>
    <input
      required
      value={form.Recipe_Picture}
      name="Recipe_Picture"
      onChange={updateField}
      type="text"
      id="Recipe_Picture"
      inlength="4"
      maxLength="44"
      placeholder="Recipe_Picture"
    />
  </Form.Label>
</div>

<div>
  <div className="labels">
    <Form.Label>
      <input
        required
        value={form.Recipe_Method1}
        name="Recipe_Method1"
        onChange={updateField}
        type="text"
        id="Recipe_Method1"
        maxLength="444"
        placeholder="Recipe_Method1"
      />
    </Form.Label>
    <Form.Label>
      <input
        value={form.Recipe_Method2}
        name="Recipe_Method2"
        onChange={updateField}
        type="text"
        id="Recipe_Method2"
        maxLength="444"
        placeholder="Recipe_Method2"
      />
    </Form.Label>
    <Form.Label>
      <input
        value={form.Recipe_Method3}
        name="Recipe_Method3"
        onChange={updateField}
        type="text"
        id="Recipe_Method3"
        maxLength="444"
        placeholder="Recipe_Method3"
      />
    </Form.Label>
    <Form.Label>
      <input
        value={form.Recipe_Method4}
        name="Recipe_Method4"
        onChange={updateField}
        type="text"
        id="Recipe_Method4"
        maxLength="444"
        placeholder="Recipe_Method4"
      />
    </Form.Label>
    <Form.Label>
      <input
        value={form.Recipe_Method5}
        name="Recipe_Method5"
        onChange={updateField}
        type="text"
        id="Recipe_Method5"
        maxLength="444"
        placeholder="Recipe_Method5"
      />
    </Form.Label>
    <Form.Label>
      <input
        value={form.Recipe_Method6}
        name="Recipe_Method6"
        onChange={updateField}
        type="text"
        id="Recipe_Method6"
        maxLength="444"
        placeholder="Recipe_Method6"
      />
    </Form.Label>
    <Form.Label>
      <input
        value={form.Recipe_Method7}
        name="Recipe_Method7"
        onChange={updateField}
        type="text"
        id="Recipe_Method7"
        maxLength="444"
        placeholder="Recipe_Method7"
      />
    </Form.Label>
    <Form.Label>
      <input
        value={form.Recipe_Method8}
        name="Recipe_Method8"
        onChange={updateField}
        type="text"
        id="Recipe_Method8"
        maxLength="444"
        placeholder="Recipe_Method8"
      />
    </Form.Label>
    <Form.Label>
      <input
        value={form.Recipe_Method9}
        name="Recipe_Method9"
        onChange={updateField}
        type="text"
        id="Recipe_Method9"
        maxLength="444"
        placeholder="Recipe_Method9"
      />
    </Form.Label>
    <Form.Label>
      <input
        value={form.Recipe_Method10}
        name="Recipe_Method10"
        onChange={updateField}
        type="text"
        id="Recipe_Method10"
        maxLength="444"
        placeholder="Recipe_Method10"
      />
    </Form.Label>
    <Form.Label>
      <input
        value={form.Recipe_Method11}
        name="Recipe_Method11"
        onChange={updateField}
        type="text"
        id="Recipe_Method11"
        maxLength="444"
        placeholder="Recipe_Method11"
      />
    </Form.Label>
    <Form.Label>
      <input
        value={form.Recipe_Method12}
        name="Recipe_Method12"
        onChange={updateField}
        type="text"
        id="Recipe_Method12"
        maxLength="444"
        placeholder="Recipe_Method12"
      />
    </Form.Label>
  </div>
</div>

<div className="labels">
  <Form.Label>
    <input
      required
      value={form.created_by}
      name="created_by"
      onChange={updateField}
      type="text"
      id="created_by"
      maxLength="44"
      placeholder="created_by"
    />
  </Form.Label>
  
</div>

<div className="labels">
  <h3>Recipe_Tags</h3>
  <Form.Label>
    <input
      required
      value={form.Recipe_Tag1}
      name="Recipe_Tag1"
      onChange={updateField}
      type="text"
      id="Recipe_Tag1"
      maxLength="444"
      placeholder="Recipe_Tag1"
    />
  </Form.Label>
  <Form.Label>
    <input
      required
      value={form.Recipe_Tag2}
      name="Recipe_Tag2"
      onChange={updateField}
      type="text"
      id="Recipe_Tag2"
      maxLength="444"
      placeholder="Recipe_Tag2"
    />
  </Form.Label>
  <Form.Label>
    <input
      required
      value={form.Recipe_Tag3}
      name="Recipe_Tag3"
      onChange={updateField}
      type="text"
      id="Recipe_Tag3"
      maxLength="444"
      placeholder="Recipe_Tag3"
    />
  </Form.Label>
  <Form.Label>
    <input
      value={form.Recipe_Tag4}
      name="Recipe_Tag4"
      onChange={updateField}
      type="text"
      id="Recipe_Tag4"
      maxLength="444"
      placeholder="Recipe_Tag4"
    />
  </Form.Label>
  <Form.Label>
    <input
      value={form.Recipe_Tag5}
      name="Recipe_Tag5"
      onChange={updateField}
      type="text"
      id="Recipe_Tag5"
      maxLength="444"
      placeholder="Recipe_Tag5"
    />
  </Form.Label>
  <Form.Label>
    <input
      value={form.Recipe_Tag6}
      name="Recipe_Tag6"
      onChange={updateField}
      type="text"
      id="Recipe_Tag6"
      maxLength="444"
      placeholder="Recipe_Tag6"
    />
  </Form.Label>
  <Form.Label>
    <input
      value={form.Recipe_Tag7}
      name="Recipe_Tag7"
      onChange={updateField}
      type="text"
      id="Recipe_Tag7"
      maxLength="444"
      placeholder="Recipe_Tag7"
    />
  </Form.Label>
  <Form.Label>
    <input
      value={form.Recipe_Tag8}
      name="Recipe_Tag8"
      onChange={updateField}
      type="text"
      id="Recipe_Tag8"
      maxLength="444"
      placeholder="Recipe_Tag8"
    />
  </Form.Label>
  <Form.Label>
    <input
      value={form.Recipe_Tag9}
      name="Recipe_Tag9"
      onChange={updateField}
      type="text"
      id="Recipe_Tag9"
      maxLength="444"
      placeholder="Recipe_Tag9"
    />
  </Form.Label>
  <Form.Label>
    <input
      value={form.Recipe_Tag10}
      name="Recipe_Tag10"
      onChange={updateField}
      type="text"
      id="Recipe_Tag10"
      maxLength="444"
      placeholder="Recipe_Tag10"
    />
  </Form.Label>
  <Form.Label>
    <input
      value={form.Recipe_Tag11}
      name="Recipe_Tag11"
      onChange={updateField}
      type="text"
      id="Recipe_Tag11"
      maxLength="444"
      placeholder="Recipe_Tag11"
    />
  </Form.Label>
  <Form.Label>
    <input
      value={form.Recipe_Tag12}
      name="Recipe_Tag12"
      onChange={updateField}
      type="text"
      id="Recipe_Tag12"
      maxLength="444"
      placeholder="Recipe_Tag12"
    />
  </Form.Label>
</div>

<div className="labels">
  <h3>Recipe Ingredients</h3>
  <div>
    <div className="labels">
      <Form.Label>
        <input
          required
          value={form.Recipe_Ingredient1}
          name="Recipe_Ingredient1"
          onChange={updateField}
          type="text"
          id="Recipe_Ingredient1"
          maxLength="444"
          placeholder="Recipe_Ingredient1"
        />
      </Form.Label>
      <Form.Label>
        <input
          required
          value={form.Recipe_Ingredient2}
          name="Recipe_Ingredient2"
          onChange={updateField}
          type="text"
          id="Recipe_Ingredient2"
          maxLength="444"
          placeholder="Recipe_Ingredient2"
        />
      </Form.Label>
      <Form.Label>
        <input
          required
          value={form.Recipe_Ingredient3}
          name="Recipe_Ingredient3"
          onChange={updateField}
          type="text"
          id="Recipe_Ingredient3"
          maxLength="444"
          placeholder="Recipe_Ingredient3"
        />
      </Form.Label>
      <Form.Label>
        <input
          value={form.Recipe_Ingredient4}
          name="Recipe_Ingredient4"
          onChange={updateField}
          type="text"
          id="Recipe_Ingredient4"
          maxLength="444"
          placeholder="Recipe_Ingredient4"
        />
      </Form.Label>
      <Form.Label>
        <input
          value={form.Recipe_Ingredient5}
          name="Recipe_Ingredient5"
          onChange={updateField}
          type="text"
          id="Recipe_Ingredient5"
          maxLength="444"
          placeholder="Recipe_Ingredient5"
        />
      </Form.Label>
      <Form.Label>
        <input
          value={form.Recipe_Ingredient6}
          name="Recipe_Ingredient6"
          onChange={updateField}
          type="text"
          id="Recipe_Ingredient6"
          maxLength="444"
          placeholder="Recipe_Ingredient6"
        />
      </Form.Label>
      <Form.Label>
        <input
          value={form.Recipe_Ingredient7}
          name="Recipe_Ingredient7"
          onChange={updateField}
          type="text"
          id="Recipe_Ingredient7"
          maxLength="444"
          placeholder="Recipe_Ingredient7"
        />
      </Form.Label>
      <Form.Label>
        <input
          value={form.Recipe_Ingredient8}
          name="Recipe_Ingredient8"
          onChange={updateField}
          type="text"
          id="Recipe_Ingredient8"
          maxLength="444"
          placeholder="Recipe_Ingredient8"
        />
      </Form.Label>
      <Form.Label>
        <input
          value={form.Recipe_Ingredient9}
          name="Recipe_Ingredient9"
          onChange={updateField}
          type="text"
          id="Recipe_Ingredient9"
          maxLength="444"
          placeholder="Recipe_Ingredient9"
        />
      </Form.Label>
      <Form.Label>
        <input
          value={form.Recipe_Ingredient10}
          name="Recipe_Ingredient10"
          onChange={updateField}
          type="text"
          id="Recipe_Ingredient10"
          maxLength="444"
          placeholder="Recipe_Ingredient10"
        />
      </Form.Label>
      <Form.Label>
        <input
          value={form.Recipe_Ingredient11}
          name="Recipe_Ingredient11"
          onChange={updateField}
          type="text"
          id="Recipe_Ingredient11"
          maxLength="444"
          placeholder="Recipe_Ingredient11"
        />
      </Form.Label>
      <Form.Label>
        <input
          value={form.Recipe_Ingredient12}
          name="Recipe_Ingredient12"
          onChange={updateField}
          type="text"
          id="Recipe_Ingredient12"
          maxLength="444"
          placeholder="Recipe_Ingredient12"
        />
      </Form.Label>
    </div>
  </div>
</div>

<button>Submit</button>
<br />
<br />
<br />
</form>
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////


    <div>
      <div>
        <h1>STORIE CREATION PAGE</h1>
      </div>
      <form onSubmit={printValues}>
        <div className="labels">
          <label>
            <input
              required
              value={form.Storie_Title}
              name="Storie_Title"
              onChange={updateField}
              id="Storie_Title"
              inlength="4"
              maxLength="44"
              type="text"
              placeholder="Storie_Title"
            />
          </label>

          <label>
            <input
              required
              value={form.Storie_Sub_Title}
              name="Storie_Sub_Title"
              onChange={updateField}
              id="Storie_Sub_Title"
              inlength="4"
              maxLength="44"
              type="text"
              placeholder="Storie_Sub_Title"
            />
          </label>
        </div>
        
        <div className="labels" id="bio">
          <label>
            <input
              aria-label="minimum height"
              placeholder="Storie_Text"
              required
              value={form.Storie_Text}
              name="Storie_Text"
              onChange={updateField}
              minLength="4"
              maxLength="4444"
              id="Storie_Text"
              type="text"
            />
          </label>
        </div>
        
        <div className="labels">
          <label>
            <input
              required
              value={form.Storie_Picture}
              name="Storie_Picture"
              onChange={updateField}
              type="text"
              id="Storie_Picture"
              inlength="4"
              maxLength="44"
              placeholder="Storie_Picture"
            />
          </label>
          <label>
            <input
              required
              value={form.Storie_Video}
              name="Storie_Video"
              onChange={updateField}
              id="Storie_Video"
              inlength="4"
              maxLength="44"
              type="text"
              placeholder="Storie_Video"
            />
          </label>
        </div>
        

        <div className="labels">
          <label>
            <input
              required
              value={form.created_by}
              name="created_by"
              onChange={updateField}
              type="text"
              id="created_by"
              inlength="4"
              maxLength="44"
              placeholder="created_by"
            />
          </label>
         
        </div>
        

        <div className="labels">
          <h3>Storie_Tags</h3>

          <label>
            <input
              required
              value={form.Storie_Tags1}
              name="Storie_Tags1"
              onChange={updateField}
              type="text"
              id="Storie_Tags1"
              maxLength="444"
              placeholder="Storie_Tags1"
            />
          </label>
          <label>
            <input
              required
              value={form.Storie_Tags2}
              name="Storie_Tags2"
              onChange={updateField}
              type="text"
              id="Storie_Tags2"
              maxLength="444"
              placeholder="Storie_Tags2"
            />
          </label>
          <label>
            <input
              required
              value={form.Storie_Tags3}
              name="Storie_Tags3"
              onChange={updateField}
              type="text"
              id="Storie_Tags3"
              maxLength="444"
              placeholder="Storie_Tags3"
            />
          </label>
          <label>
            <input
              value={form.Storie_Tags4}
              name="Storie_Tags4"
              onChange={updateField}
              type="text"
              id="Storie_Tags4"
              maxLength="444"
              placeholder="Storie_Tags4"
            />
          </label>
          </div>
        <div className="labels">
          <label>
            <input
              value={form.Storie_Tags5}
              name="Storie_Tags5"
              onChange={updateField}
              type="text"
              id="Storie_Tags5"
              maxLength="444"
              placeholder="Storie_Tags5"
            />
          </label>
          <label>
            <input
              value={form.Storie_Tags6}
              name="Storie_Tags6"
              onChange={updateField}
              type="text"
              id="Storie_Tags6"
              maxLength="444"
              placeholder="Storie_Tags6"
            />
          </label>
          <label>
            <input
              value={form.Storie_Tags7}
              name="Storie_Tags7"
              onChange={updateField}
              type="text"
              id="Storie_Tags7"
              maxLength="444"
              placeholder="Storie_Tags7"
            />
          </label>
          <label>
            <input
              value={form.Storie_Tags8}
              name="Storie_Tags8"
              onChange={updateField}
              type="text"
              id="Storie_Tags8"
              maxLength="444"
              placeholder="Storie_Tags8"
            />
          </label>
          </div>
        <div className="labels">
          <label>
            <input
              value={form.Storie_Tags9}
              name="Storie_Tags9"
              onChange={updateField}
              type="text"
              id="Storie_Tags9"
              maxLength="444"
              placeholder="Storie_Tags9"
            />
          </label>
          <label>
            <input
              value={form.Storie_Tags10}
              name="Storie_Tags10"
              onChange={updateField}
              type="text"
              id="Storie_Tags10"
              maxLength="444"
              placeholder="Storie_Tags10"
            />
          </label>
          <label>
            <input
              value={form.Storie_Tags11}
              name="Storie_Tags11"
              onChange={updateField}
              type="text"
              id="Storie_Tags11"
              maxLength="444"
              placeholder="Storie_Tags11"
            />
          </label>
          <label>
            <input
              value={form.Storie_Tags12}
              name="Storie_Tags12"
              onChange={updateField}
              type="text"
              id="Storie_Tags12"
              maxLength="444"
              placeholder="Storie_Tags12"
            />
          </label>
        </div>
<br/>       
        <button>Submit</button>
        <br />
        <br />
        <br />
      </form>
    </div>


</>