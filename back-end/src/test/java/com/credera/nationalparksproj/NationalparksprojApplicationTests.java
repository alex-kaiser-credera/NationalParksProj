package com.credera.nationalparksproj;

import com.credera.nationalparksproj.dto.UnconnectedRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class NationalparksprojApplicationTests {

	@Autowired
	MockMvc mockMvc;

	@Test
	public void getPark() throws Exception{
		ObjectMapper objectMapper = new ObjectMapper();
		mockMvc.perform(get("/getPark/?id=5"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.name").value("Big Bend"));

	}

	@Test
	public void sendRequest() throws Exception{
		UnconnectedRequest unconnectedRequest = new UnconnectedRequest("In Progress", "01/01/10", "01/02/10", 43, "Bathrooms Dirty", "Bathrooms Bad", "lol@yahoo.com");
		ObjectMapper objectMapper = new ObjectMapper();
		mockMvc.perform(post("/status/visitor")
				.contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsString(unconnectedRequest)))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.parkLocation.name").value("Mesa Verde"));
	}

}
